$( function() {
    var availableName = [
      "Angelina",
      "Brad",
      "Claire",
      "Elen"
    ];
    var availableLastName = [
      "Jolie",
      "Pitt",
      "Johnson",
      "Ferreira"
    ];
    var availableEmail = [
      "ajolie@email.com",
      "bpitt@email.com",
      "cjohnson@email.com",
      "elen.crisf@uol.com.br"
    ];
    $( "#name" ).autocomplete({
      source: availableName
    });

    $( "#lName" ).autocomplete({
      source: availableLastName
    });

    $( "#email" ).autocomplete({
      source: availableEmail
    });
  } );