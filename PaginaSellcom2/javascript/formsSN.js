$(document).ready(function () {
    $("#formSNGroup").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            company: {
                required: true,
                minlength: 2
            },
            job: {
                required: true,
                minlength: 2
            },
            telefono: {
                required: false,
                minlength: 8,
                maxlength: 10,
                digits: true
            }
        },
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("invalid-feedback");
            error.addClass("noshowlabelsfeedback");

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents(".col-sm-5").addClass("has-feedback");
            element.parents(".col-sm-12").addClass("has-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!element.next("span")[0]) {
                $("<span class='bi bi-x glyphicon-remove form-control-feedback'></span>").insertAfter(element);
            }
        },
        success: function (label, element) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!$(element).next("span")[0]) {
                $("<span class='bi bi-check glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
            $(element).parents(".col-sm-12").addClass("has-error").removeClass("has-success");
            $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
            $(element).parents(".col-sm-12").addClass("has-success").removeClass("has-error");
            $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
        },
        submitHandler: function (form) {
            //console.log(form);

            //datosPersonales
            $("#fullName").attr("name", "fullName");
            $("#email").attr("name", "email");
            $("#company").attr("name", "company");
            $("#job").attr("name", "job");
            $("#telefono").attr("name", "telefono");

            //console.log("formserialize", $(form).serialize());

            //alert( $(form).serialize() );

            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function (response) {
                    console.log("response1", response);
                    if (response === "error") {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Algo salio mal, reintentalo.",
                            confirmButtonText: "Aceptar",
                            confirmButtonColor: '#3085d6',
                        })
                    } else if (response === "ok") {
                        Swal.fire({
                            title: "Correcto",
                            text: "Gracias por tu tiempo.",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                            confirmButtonColor: '#3085d6',
                            allowOutsideClick: false
                        }).then(result => {
                            //console.log("hola", result.value);
                            if (result.value) {
                                location.reload()
                            }
                        })
                    }
                },
                error: function () {
                    //$("#enviarbtn").removeAttr("disabled");
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salio mal, reintentalo.",
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: '#3085d6',
                    })
                }
            })
        }
    });

    //alphanumeric validation
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[\w -]+$/i.test(value);
    }, "");

});