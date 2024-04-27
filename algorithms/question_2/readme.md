<!-- <style>
    * {
        direction: rtl;
    }
</style> -->

# سوال دوم: (تاریخچه مرورگر)

شما یک مرورگر با یک تب دارید که در آن از صفحه اصلی شروع می‌کنید و می‌توانید به یک URL دیگر بروید، به تعداد گام‌های تاریخچه عقب بروید یا به تعداد گام‌های تاریخچه جلو بروید.

کلاس `BrowserHistory` را به طوری پیاده سازی کنید که شامل متد‌های زیر باشد:

- تابع `BrowserHistory(string url)` : با گرفتن url صفحه اصلی، یک شئ جدید از مرورگر میسازد.
- تابع `void visit(string url)` : از صفحه فعلی به url وارد شده میرود و همه تاریخچه صفحات بعدی را پاک می‌کند.
- تابع `string undo(int steps)` : ورودی تعداد گام را میگیرد و به تعداد گام‌ها به عقب حرکت می‌کند. اگر فقط بتوانید x گام در تاریخچه عقب بروید و گام‌ها بیشتر از x باشد، فقط x گام را برمی‌گرداند. پس از حرکت حداکثر تعداد گام‌ها رو به عقب در تاریخچه، url فعلی را برمی‌گرداند.
- تابع `string redo(int steps)` : ورودی تعداد گام را میگیرد و به تعداد گام‌ها به جلو حرکت می‌کند. اگر فقط بتوانید x گام در تاریخچه جلو بروید و گام‌ها بیشتر از x باشد، فقط x گام را برمی‌گرداند. پس از جابجایی حداکثر تعداد گام‌ها رو به جلو در تاریخچه، url فعلي را برمی‌گرداند.

## مثال‌ها

### مثال ۱:

ورودی:

```java
BrowserHistory history = new BrowserHistory("rahnemacollege.com");
history.visit("google.com");       // You are in "rahnemacollege.com". Visit "google.com"
history.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
history.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
history.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
history.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
history.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
history.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
history.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
history.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
history.back(7);                   // You are in "google.com", you can move back only one step to "rahnemacollege.com". return "rahnemacollege.com"

```

خروجی:

```
facebook.com
google.com
facebook.com
linkedin.com
google.com
rahnemacollege.com
```
