var submittedUsers = [{ id: 1 },
{ id: 2 },
{ id: 2 }];
var goodUsers = [{ id: 1 },
{ id: 2 },
{ id: 3 }];

function checkUsers(submittedUsers, goodUsers) {

    for (i = 0; i < submittedUsers.length; i++) {
        var flag = false;

        for (j = 0; j < goodUsers.length; j++) {
            if (submittedUsers[i].id == goodUsers[j].id) {
                flag = true;
                break;
            }
        }
        if (flag == false)
            return flag;

    }
    return true;
}
console.log(checkUsers(submittedUsers, goodUsers));