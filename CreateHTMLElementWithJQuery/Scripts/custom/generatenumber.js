var Random = {

    Stored: [],

    Generate: function () {
        var newId = Date.now().toString().substr(6); // or use any method that you want to achieve this string

        if (this.Check(newId)) {
            this.Job();
        }

        this.Stored.push(newId);
        return newId; // or store it in sql database or whatever you want

    },

    Check: function (id) {
        for (var i = 0; i < this.Stored.length; i++) {
            if (this.Stored[i] == id) return true;
        }
        return false;
    }

};
