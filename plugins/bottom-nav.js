module.exports = function bottomNav(config) {
    return {
        '.bottom-nav': {
            padding: `${config('theme.spacing.12')} 0`,
            marginTop: config('theme.spacing.16'),
            borderTopWidth: config('theme.borderWidth.default'),
            borderTopColor: config('theme.colors.gray'),
            boxShadow: `0px -1px 0px ${config('theme.colors.lightGray')}`,

            'nav': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                'a': {
                    fontWeight: config('theme.fontWeight.bold'),
                    lineHeight: '24px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',

                    '&.back': {
                        'img': {
                            marginRight: config('theme.spacing.4')
                        }
                    },

                    '&.forward': {
                        'img': {
                            marginLeft: config('theme.spacing.4')
                        }
                    }
                }
            }
        }
    }
};
