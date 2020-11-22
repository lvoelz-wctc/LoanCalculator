$(document).ready(
    function () {
       $("#submit_loan").click(processLoan);

       var myRules = {
           salary:
               {
                   required: true,
                   digits: true,
                   min: 0,
                   max: 999999999
               },

               credit: {
               required: true,
                   digits: true,
                   min: 300,
                   max: 850
               },

               months: {
               required: true,
                   digits: true,
                   min: 0,
                   max: 840
               }
       }

       var myMessages =
           {
               salary: {
                   required: "Salary is required.",
                   digits: "Salary must be in digits.",
                   min: "Salary must be greater than or equal to zero.",
                   max: "Salary must be below 1000000000."
               },

               credit: {
                   required: "Credit score is required.",
                   digits: "Credit score must be in digits.",
                   min: "Credit score must be greater than or equal to 300.",
                   max: "Salary must be less than or equal to 850."
               },

               months: {
                   required: "Months are required.",
                   digits: "Months must be in digits.",
                   min: "Months must be greater than or equal to zero.",
                   max: "Months must be less than or equal to 840."
               }
           }

        $("form").validate(
            {
                submitHandler: processLoan,
                rules: myRules,
                messages: myMessages,
            }
        );

       function processLoan() {
           $("form").submit(processLoan);
           var months = parseFloat($("#months").val());
           var salary = parseFloat($("#salary").val());
           var credit = parseFloat($("#credit").val());

           //process logic. Denied conditions must go first, all ordered by specificity
           if (salary < 40000 && credit < 600)
           {
               $("#results").text("Loan denied.");
           }

           else if (salary < 40000 && credit >= 600 && months <= 12)
           {
               $("#results").text("Loan denied.");
           }

           else if (salary < 40000 && credit >= 600 && months > 12)
           {
               $("#results").text("Loan approved.");
           }

           else if (salary >= 40000 && credit <= 600 && months <= 12) {
               $("#results").text("Loan denied.");
           }

           else
           {
               $("#results").text("Loan approved.");
           }
       }
    });