function calculateInterest() {
    // مسح النتائج السابقة
    const resultDiv = document.getElementById('interest-result');
    resultDiv.innerHTML = '';
    
    // الحصول على القيم المدخلة
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const timeValue = parseFloat(document.getElementById('time-value').value);
    const period = document.querySelector('input[name="period"]:checked').value;
    
    // التحقق من المدخلات
    if (isNaN(amount) {
        showError('الرجاء إدخال المبلغ الأساسي');
        return;
    }
    
    if (isNaN(rate)) {
        showError('الرجاء إدخال نسبة الفائدة');
        return;
    }
    
    if (isNaN(timeValue) || timeValue <= 0) {
        showError('الرجاء إدخال فترة زمنية صحيحة');
        return;
    }
    
    // حساب الفترة بالسنوات
    let years;
    let periodName;
    
    switch(period) {
        case 'days':
            years = timeValue / 365;
            periodName = 'يوم';
            break;
        case 'months':
            years = timeValue / 12;
            periodName = 'شهر';
            break;
        case 'years':
            years = timeValue;
            periodName = 'سنة';
            break;
    }
    
    // حساب الفائدة والمبلغ الإجمالي
    const interest = (amount * rate * years) / 100;
    const total = amount + interest;
    
    // عرض النتائج
    showResult(amount, rate, timeValue, periodName, interest, total);
}

function showError(message) {
    const resultDiv = document.getElementById('interest-result');
    resultDiv.innerHTML = `<p style="color: #e74c3c;">${message}</p>`;
}

function showResult(amount, rate, time, periodName, interest, total) {
    const resultDiv = document.getElementById('interest-result');
    
    resultDiv.innerHTML = `
        <p><strong>المبلغ الأساسي:</strong> ${amount.toFixed(2)}</p>
        <p><strong>نسبة الفائدة:</strong> ${rate}%</p>
        <p><strong>مدة الاستثمار:</strong> ${time} ${periodName}</p>
        <hr>
        <p><strong>قيمة الفائدة:</strong> ${interest.toFixed(2)}</p>
        <p><strong>المبلغ الإجمالي:</strong> ${total.toFixed(2)}</p>
    `;
}
