//.....Home............
document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي

    // قم بالتحقق من صحة البيانات هنا
    var studentId = document.querySelector("input[type='text']").value;
    var password = document.querySelector("input[type='password']").value;

    // قم بإجراء الإجراءات المناسبة مثل التحقق من البيانات وتوجيه المستخدم وما إلى ذلك
    if (studentId && password) {
      console.log("تسجيل الدخول...");
      // قم بإجراء الإجراءات اللازمة هنا
    } else {
      console.log("الرجاء إدخال البيانات المطلوبة");
    }
  });

  // ربط النص "هل نسيت كلمة المرور؟" بإجراءات أخرى إذا لزم الأمر
  var forgotPasswordLink = document.querySelector(".pass");
  forgotPasswordLink.addEventListener("click", function() {
    // قم بإجراء الإجراءات المناسبة عند النقر على الرابط
    console.log("نسيت كلمة المرور؟");
  });
});






//.......training_data..........
function addTrainingData() {
    // الحصول على قيمة الحقول من النموذج
    var day = document.getElementById("day").value;
    var date = document.getElementById("date").value;
    var training = document.getElementById("training").value;
    var hours = document.getElementById("hours").value;
    
    // القيام بالمزيد من المعالجة أو إرسال البيانات إلى الخادم
    
    
    alert("تمت إضافة بيانات التدريب:\nاليوم: " + day + "\nالتاريخ: " + date + "\nنص التدريب: " + training + "\nعدد الساعات: " + hours);
  }

  
  //company***********************
  document.addEventListener("DOMContentLoaded", function() {
    // الحصول على العناصر التي تحتاج إلى تفاعل
    var registerButtons = document.querySelectorAll("button");
    var logoutLink = document.querySelector("a[href='#']");
    
    // إضافة مراقب الأحداث لكل زر تسجيل ورابط تسجيل الخروج
    registerButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var companyName = this.parentNode.parentNode.querySelector("td").textContent;
        console.log("تم التسجيل في شركة التدريب: " + companyName);
        // قم بإجراء الإجراءات المناسبة عند النقر على زر التسجيل في الشركة
      });
    });
    
    logoutLink.addEventListener("click", function() {
      console.log("تم تسجيل الخروج");
      // قم بإجراء الإجراءات المناسبة عند النقر على رابط تسجيل الخروج
    });
  });

  //........choose company.............

  document.addEventListener("DOMContentLoaded", function() {
    // الحصول على العناصر التي تحتاج إلى تفاعل
    var displayButtons = document.querySelectorAll("button");
  
    // إضافة مراقب الأحداث لكل زر العرض
    displayButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var companyName = this.parentNode.parentNode.querySelector("td:first-child").textContent;
        console.log("تم النقر على زر العرض لشركة التدريب: " + companyName);
        // قم بإجراء الإجراءات المناسبة عند النقر على زر العرض
      });
    });
  });


  //................Evalution of training summer..............
  
    // استدعاء الدالة بعد تحميل المستند
    window.addEventListener('DOMContentLoaded', function() {
      // العثور على الجدول
      var table = document.getElementById('students-table');

      // الحصول على صفوف الجدول باستثناء الصف العنواني
      var rows = table.getElementsByTagName('tr');
      for (var i = 1; i < rows.length; i++) {
        // الحصول على خلايا الصف
        var cells = rows[i].getElementsByTagName('td');

        // تحويل قيمة العلامة النهائية إلى رقم
        var grade = parseInt(cells[1].textContent);

        // التحقق من العلامة النهائية وتغيير لون الخلية بناءً على الشروط
        if (grade >= 90) {
          cells[1].style.backgroundColor = 'green';
          cells[1].style.color = 'white';
        } else if (grade >= 80) {
          cells[1].style.backgroundColor = 'yellow';
        } else {
          cells[1].style.backgroundColor = 'red';
          cells[1].style.color = 'white';
        }
      }
    });
  

  

