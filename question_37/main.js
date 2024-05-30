function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Size of the shirt is ".concat(size, " and message printed on it is \"").concat(message, "\"."));
}
make_shirt();
make_shirt("meduim");
make_shirt("small", "dream big");
