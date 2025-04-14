document.getElementById('calculate-btn').addEventListener('click', function() {
    try {
        // الحصول على القيم المدخلة
        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const timeValue = parseFloat(document.getElementById('time-value').value);
        const period = document.querySelector('input[name="period"]:checked').value;
        
        // التحقق من المدخلات
        if (isNaN(amount)) {
            throw new Error('الرجاء إدخال المبلغ الأساسي');
        }
        
        if (isNaN(rate)) {
            throw new Error('الرجاء إدخال نسبة الفائدة');
        }
        
        if (isNaN(timeValue) || timeValue <= 0) {
            throw new Error('الرجاء إدخال فترة زمنية صحيحة');
        }
        
        // حساب الفترة بالسنوات
        let totalYears, periodName;
        switch(period) {
            case 'days':
                totalYears = timeValue / 365;
                periodName = 'أيام';
                break;
            case 'months':
                totalYears = timeValue / 12;
                periodName = 'أشهر';
                break;
            case 'years':
                totalYears = timeValue;
                periodName = 'سنوات';
                break;
        }
        
        // حساب الفائدة والمبلغ الإجمالي
        const interest = (amount * rate * totalYears) / 100;
        const total = amount + interest;
        
        // عرض النتائج
        showResult(amount, rate, timeValue, periodName, interest, total);
    } catch (error) {
        showError(error.message);
    }
});

function showError(message) {
    const resultDiv = document.getElementById('interest-result');
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
}

function showResult(amount, rate, time, periodName, interest, total) {
    const resultDiv = document.getElementById('interest-result');
    
    resultDiv.innerHTML = `
        <p><strong>المبلغ الأساسي:</strong> ${amount.toFixed(2)}</p>
        <p><strong>نسبة الفائدة:</strong> ${rate}%</p>
        <p><strong>الفترة:</strong> ${time} ${periodName}</p>
        <hr>
        <p><strong>قيمة الفائدة:</strong> ${interest.toFixed(2)}</p>
        <p><strong>المبلغ الإجمالي:</strong> ${total.toFixed(2)}</p>
    `;
}
