export const module = {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
};