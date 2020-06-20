exports.showAdmincourse111 = function(req,res){
    res.render("admin/course111",{
        page : "CourseSelectionState"
    });
}

exports.showAdmincourse111Import = function(req,res){
    res.render("admin/course111/import",{
        page : "CourseSelectionState"
    });
}

exports.showAdmincourse111Add = function(req,res){
    res.render("admin/course111/add",{
        page : "CourseSelectionState"
    });
}