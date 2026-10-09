export const getBanglaDate = () => {
    return new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
};

