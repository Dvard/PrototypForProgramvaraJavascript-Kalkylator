let app = new Vue({
    el: '#app',
    data: {
        calculation: '',
        btns: [
            {
                'val': 'C',
                'type': 'danger',
            },
            {
                'val': '(',
                'type': 'secondary',
            },
            {
                'val': ')',
                'type': 'secondary',
            },
            {
                'val': '/',
                'type': 'primary',
            },
            {
                'val': '7',
                'type': 'secondary',
            },
            {
                'val': '8',
                'type': 'secondary',
            },
            {
                'val': '9',
                'type': 'secondary',
            },
            {
                'val': '*',
                'type': 'primary',
            },
            {
                'val': '4',
                'type': 'secondary',
            },
            {
                'val': '5',
                'type': 'secondary',
            },
            {
                'val': '6',
                'type': 'secondary',
            },
            {
                'val': '-',
                'type': 'primary',
            },
            {
                'val': '1',
                'type': 'secondary',
            },
            {
                'val': '2',
                'type': 'secondary',
            },
            {
                'val': '3',
                'type': 'secondary',
            },
            {
                'val': '+',
                'type': 'primary',
            },
            {
                'val': '0',
                'type': 'secondary',
            },
            {
                'val': '.',
                'type': 'secondary',
            },
            {
                'val': '=',
                'type': 'success',
            },
        ],
    },
    methods: {
        clear() {
            this.calculation = '';
        },
        calculate() {
            try {
                this.calculation = eval(this.calculation);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    this.calculation = 'Syntax Error!'
                }
            }
        },
        addToCalculation(chr) {
            this.calculation += chr;
        },
        chunk(array, size) {
            const chunked_arr = [];
            for (let i = 0; i < array.length; i++) {
                const last = chunked_arr[chunked_arr.length - 1];
                if (!last || last.length === size) {
                    chunked_arr.push([array[i]]);
                } else {
                    last.push(array[i]);
                }
            }
            return chunked_arr;
        },
    },
    computed: {
        btnGroups() {
            return this.chunk(this.btns, 4);
        }
    }
});