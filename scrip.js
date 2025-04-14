function calculateInterest() {
    try {
        // الحصول على القيم من حقول الإدخال
        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const days = parseFloat(document.getElementById('days').value) || 0;
        const months = parseFloat(document.getElementById('months').value) || 0;
        const years = parseFloat(document.getElementById('years').value) || 0;
        
        // التحقق من صحة المدخلات الأساسية
        if (isNaN(amount) {
            throw new Error('الرجاء إدخال المبلغ الأساسي');
        }
        
        if (isNaN(rate)) {
            throw new Error('الرجاء إدخال نسبة الفائدة');
        }
        
        // تحويل كل الفترات إلى سنوات للحساب
        const totalYears = years + (months / 12) + (days / 365);
        
        if (totalYears <= 0) {
            throw new Error('الرجاء إدخال فترة زمنية صحيحة');
        }
        
        // حساب الفائدة البسيطة
        const interest = (amount * rate * totalYears) / 100;
        const total = amount + interest;
        
        // عرض النتيجة
        document.getElementById('interest-result').innerHTML = `
            المبلغ الأساسي: ${amount.toFixed(2)}<br>
            نسبة الفائدة: ${rate}%<br>
            الفترة: ${totalYears.toFixed(2)} سنة<br>
            ---------------------------<br>
            الفائدة: ${interest.toFixed(2)}<br>
            المبلغ الإجمالي: ${total.toFixed(2)}
        `;
    } catch (error) {
        document.getElementById('interest-result').textContent = error.message;
    }
}
