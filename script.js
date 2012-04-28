var inputs = document.getElementsByTagName('input');

for( var i = 0; i < inputs.length; i++ ){

	elem = inputs[i];

    elem.onfocus=function() {
				
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
		
    };

    elem.onblur=function() {
	
		if(this.value == ""){
			this.value = this.defaultValue;
		}
    };
}

