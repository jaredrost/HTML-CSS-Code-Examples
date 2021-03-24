
/* 
 * This url was VERY helpful: 
   http://www.datatables.net/release-datatables/examples/advanced_init/column_render.html
*/

var oTable;

 $(document).ready(function() {
       oTable = $('#example').DataTable( {
    	   
    	// The data    
        "aaData": [
            [ "1101", "5/1/17", "Withdraw", 150, "50", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 150, "-100", "DELETE" ],
            [ "1101", "5/1/17", "Desposit", 50, "-50", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 300, "-350" , "DELETE"],
        ],
        
        // The column labels
        "aoColumns": [
            { "sTitle": "Account Number"},
            { "sTitle": "Date" },
            { "sTitle": "Type" },
            { "sTitle": "Amount" },
            { "sTitle": "Balance"},
            { "sTitle": "Delete"}
        ],
        
        // Special stuff to do on columns.  Here we're taking advantage of the 'mRender'
        // mechanism.  We're saying for each column (in this case column 5), replace
        // the existing text with a delete button.  FWIW the function parameters are:
        // - data: the entire table as a 2d array
        // - type: filter, display, type, sort 
        // - row: the data in the row... so row[0] is the first column, row[1] the second, etc.
    	"aoColumnDefs": [
                     {
                         "mRender": function ( data, type, row ) {
                             return "<button class='deletebutton'>Delete</button>";
                         },
                         "aTargets": [ 5 ]
                     }
                 ]
    
    } );
    
    
    // Click handler for delete button
    $('.deletebutton').click(function( e ) {
    	
       // Delete figuring out what row the delete button belongs to.
       // - get a collection of rows closest to the delete button (there's only one)
       // - get the first row in the collection of one
       // - pass this row into fnDeleteRow();
       var rowList = $(this).closest('tr');
       var row = rowList[0];
       oTable.fnDeleteRow(row);
       
    });
    
} );
var oTable2;

 $(document).ready(function() {
       oTable2 = $('#example2').DataTable( {
    	   
    	// The data    
        "aaData": [
            [ "1101", "5/1/17", "Withdraw", 150, "50", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 150, "50", "DELETE" ],
            [ "1101", "5/1/17", "Desposit", 50, "100", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 100, "0" , "DELETE"],
        ],
        
        // The column labels
        "aoColumns": [
            { "sTitle": "Account Number"},
            { "sTitle": "Date" },
            { "sTitle": "Type" },
            { "sTitle": "Amount" },
            { "sTitle": "Balance"},
            { "sTitle": "Delete"}
        ],
        
        // Special stuff to do on columns.  Here we're taking advantage of the 'mRender'
        // mechanism.  We're saying for each column (in this case column 5), replace
        // the existing text with a delete button.  FWIW the function parameters are:
        // - data: the entire table as a 2d array
        // - type: filter, display, type, sort 
        // - row: the data in the row... so row[0] is the first column, row[1] the second, etc.
    	"aoColumnDefs": [
                     {
                         "mRender": function ( data, type, row ) {
                             return "<button class='deletebutton'>Delete</button>";
                         },
                         "aTargets": [ 5 ]
                     }
                 ]
    
    } );
    
    
    // Click handler for delete button
    $('.deletebutton').click(function( e ) {
    	
       // Delete figuring out what row the delete button belongs to.
       // - get a collection of rows closest to the delete button (there's only one)
       // - get the first row in the collection of one
       // - pass this row into fnDeleteRow();
       var rowList = $(this).closest('tr');
       var row = rowList[0];
       oTable.fnDeleteRow(row);
       
    });
    
} );
var oTable3;

 $(document).ready(function() {
       oTable3 = $('#example3').DataTable( {
    	   
    	// The data    
        "aaData": [
            [ "1101", "5/1/17", "Withdraw", 150, "5150", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 150, "5000", "DELETE" ],
            [ "1101", "5/1/17", "Desposit", 50, "5050", "DELETE" ],
            [ "1101", "5/1/17", "Withdraw", 100, "4950" , "DELETE"],
        ],
        
        // The column labels
        "aoColumns": [
            { "sTitle": "Account Number"},
            { "sTitle": "Date" },
            { "sTitle": "Type" },
            { "sTitle": "Amount" },
            { "sTitle": "Balance"},
            { "sTitle": "Delete"}
        ],
        
        // Special stuff to do on columns.  Here we're taking advantage of the 'mRender'
        // mechanism.  We're saying for each column (in this case column 5), replace
        // the existing text with a delete button.  FWIW the function parameters are:
        // - data: the entire table as a 2d array
        // - type: filter, display, type, sort 
        // - row: the data in the row... so row[0] is the first column, row[1] the second, etc.
    	"aoColumnDefs": [
                     {
                         "mRender": function ( data, type, row ) {
                             return "<button class='deletebutton'>Delete</button>";
                         },
                         "aTargets": [ 5 ]
                     }
                 ]
    
    } );
    
    
    // Click handler for delete button
    $('.deletebutton').click(function( e ) {
    	
       // Delete figuring out what row the delete button belongs to.
       // - get a collection of rows closest to the delete button (there's only one)
       // - get the first row in the collection of one
       // - pass this row into fnDeleteRow();
       var rowList = $(this).closest('tr');
       var row = rowList[0];
       oTable.fnDeleteRow(row);
       
    });
   function doFunction(){
     oTable3.add.row( [ "1101", "5/1/17", "Withdraw", 100, "4950" , "DELETE"]); 
   }

} );
