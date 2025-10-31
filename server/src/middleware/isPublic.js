export async function isPublic(req, res, next) {
    if (req.user.isLoggedIn) {
        return res.json({
            status: 'error',
            msg: 'This route is for public usage only (isrinti cookies)',
        });
    }

    return next();
}