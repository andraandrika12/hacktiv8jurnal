[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12057030&assignment_repo_type=AssignmentRepo)
# fsjs-p2-v3-iproject-server
Individual Project - Server

pass-project-supaBase:DOympm1WNfGmSCsb
postgresql://postgres:DOympm1WNfGmSCsb@db.erxaaxppiyxabecaubhs.supabase.co:5432/postgres

export DATABASE_URL=postgresql://postgres:DOympm1WNfGmSCsb@db.erxaaxppiyxabecaubhs.supabase.co:5432/postgres

token_key_git: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

module.exports = {
apps : [{
name : "app1",
script : "./app.js",
env : {
NODE_ENV : "production",
PORT : 80,
DATABASE_URL : "postgres://[YOUR_DB_URI]",
JWT_SECRET : "[APP_SECRET_KEY]",
}
}]
}