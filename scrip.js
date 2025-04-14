function calculateInterest() {
    try {
        // الحصول على القيم من حقول الإدخال
        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const timeValue = parseFloat(document.getElementById('time-value').value);
        const period = document.querySelector('input[name="period"]:checked').value;
        
        // التحقق من صحة المدخلات
        if (isNaN(amount) {
            throw new Error('الرجاء إدخال المبلغ الأساسي');
        }
        
        if (isNaN(rate)) {
            throw new Error('الرجاء إدخال نسبة الفائدة');
        }
        
        if (isNaN(timeValue) || timeValue <= 0) {
            throw new Error('الرجاء إدخال فترة زمنية صحيحة');
        }
        
        // تحويل الفترة إلى سنوات
        let totalYears;
        switch(period) {
            case 'days':
                totalYears = timeValue / 365;
                break;
            case 'months':
                totalYears = timeValue / 12;
                break;
            case 'years':
                totalYears = timeValue;
                break;
        }
        
        // حساب الفائدة البسيطة
        const interest = (amount * rate * totalYears) / 100;
        const total = amount + interest;
        
        // عرض النتيجة
        document.getElementById('interest-result').innerHTML = `
            المبلغ الأساسي: ${amount.toFixed(2)}<br>
            نسبة الفائدة: ${rate}%<br>
            الفترة: ${timeValue} ${getPeriodName(period)}<br>
            ---------------------------<br>
            الفائدة: ${interest.toFixed(2)}<br>
            المبلغ الإجمالي: ${total.toFixed(2)}
        `;
    } catch (error) {
        document.getElementById('interest-result').textContent = error.message;
    }
}

function getPeriodName(period) {
    switch(period) {
        case 'days': return 'يوم';
        case 'months': return 'شهر';
        case 'years': return 'سنة';
        default: return '';
    }
}
