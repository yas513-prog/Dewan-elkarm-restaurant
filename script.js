// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // 1. معالجة الضغط على أزرار "احجز طاولة"
    const bookingButtons = [
        document.getElementById('btn-book-top'),
        document.getElementById('btn-book-hero'),
        document.querySelector('.id-book-trigger')
    ];

    bookingButtons.forEach(button => {
        if(button) {
            button.addEventListener('click', () => {
                alert('شكرًا لاختياركم ديوان الكرم! سيتم فتح نظام حجز الطاولات الإلكتروني فوراً.');
                // هنا مستقبلاً يمكنكِ فتح نافذة منبثقة (Popup) مخصصة لتحديد التاريخ والوقت
            });
        }
    });

    // 2. معالجة الاشتراك في النشرة البريدية
    const subscribeBtn = document.getElementById('btn-subscribe');
    const emailInput = document.getElementById('subscriber-email');

    if(subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', () => {
            const emailValue = emailInput.value.trim();
           
            if(emailValue === "") {
                alert('من فضلكِ أدخلي بريداً إلكترونياً صحيحاً أولاً.');
            } else {
                alert(`تهانينا! تم تسجيل البريد (${emailValue}) بنجاح. ستصلكِ أقوى عروض ديوان الكرم قريباً.`);
                emailInput.value = ""; // تفريغ الحقل بعد الاشتراك
            }
        });
    }

    // 3. تغيير لون روابط التنقل العلوية تلقائياً عند النقر
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

});