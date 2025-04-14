function calculateInterest() {
    // الحصول على القيم من حقول الإدخال
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const days = parseFloat(document.getElementById('days').value) || 0;
    const months = parseFloat(document.getElementById('months').value) || 0;
    const years = parseFloat(document.getElementById('years').value) || 0;
    
    // التحقق من صحة المدخلات الأساسية
    if (isNaN(amount) {
        document.getElementById('interest-result').textContent = 'الرجاء إدخال المبلغ الأساسي';
        return;
    }
    
    if (isNaN(rate)) {
        document.getElementById('interest-result').textContent = 'الرجاء إدخال نسبة الفائدة';
        return;
    }
    
    // التحقق من إدخال فترة زمنية
    if (days === 0 && months === 0 && years === 0) {
        document.getElementById('interest-result').textContent = 'الرجاء إدخال الفترة الزمنية';
        return;
    }
    
    // تحويل كل الفترات إلى سنوات للحساب
    const totalYears = years + (months / 12) + (days / 365);
    
    // حساب الفائدة البسيطة
    const interest = (amount * rate * totalYears) / 100;
    const total = amount + interest;
    
    // عرض النتيجة
    document.getElementById('interest-result').innerHTML = `
        الفائدة: ${interest.toFixed(2)}<br>
        المبلغ الإجمالي: ${total.toFixed(2)}
    `;
}
