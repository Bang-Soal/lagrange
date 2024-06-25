import colors from "tailwindcss/colors"

type SetColor = {
    [key: string]: {
        content: string;
        border: string;
        background: string;
        tw: {
            content: string;
            border: string;
            background: string;
        };
    };
}

const setColor: SetColor = {
    'Kemampuan Penalaran Umum': {
        content: colors.purple[600],
        border: colors.purple[300],
        background: colors.purple[200],
        tw: {
            content: 'text-purple-600',
            border: 'border-purple-300',
            background: 'bg-purple-200'
        }
    },
    'Pengetahuan dan Pemahaman Umum': {
        content: colors.orange[600],
        border: colors.orange[300],
        background: colors.orange[200],
        tw: {
            content: 'text-orange-600',
            border: 'border-orange-300',
            background: 'bg-orange-200'
        }
    },
    'Kemampuan Memahami Bacaan dan Menulis': {
        content: colors.teal[700],
        border: colors.teal[300],
        background: colors.teal[200],
        tw: {
            content: 'text-teal-700',
            border: 'border-teal-300',
            background: 'bg-teal-200'
        }
    },
    'Pengetahuan Kuantitatif': {
        content: colors.pink[600],
        border: colors.pink[300],
        background: colors.pink[200],
        tw: {
            content: 'text-pink-600',
            border: 'border-pink-300',
            background: 'bg-pink-200'
        }
    },
    'Literasi dalam Bahasa Indonesia dan Bahasa Inggris': {
        content: colors.cyan[600],
        border: colors.cyan[300],
        background: colors.green[200],
        tw: {
            content: 'text-cyan-600',
            border: 'border-cyan-300',
            background: 'bg-green-200'
        }
    },
    'Penalaran Matematika': {
        content: colors.yellow[700],
        border: colors.yellow[300],
        background: colors.yellow[200],
        tw: {
            content: 'text-yellow-700',
            border: 'border-yellow-300',
            background: 'bg-yellow-200'
        }
    }
}

export const getSetColor = (name: string) => setColor[name] || setColor['Kemampuan Penalaran Umum']