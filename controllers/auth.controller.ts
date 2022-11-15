const login = async (req: Request, res: Response) => {
	const { email, username, password } = req.body;
	if (!email && !username)
		return res
			.status(404)
			.json({ message: "Email or Username Required!" });
	if (!password)
		return res.status(404).json({ message: "Password Required!" });
};


export default {
	login,
};
