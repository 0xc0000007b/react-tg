import React, {useCallback, useEffect, useState} from 'react';
import './styles/product-list.scss'
import Pizza from "../product/pizza";

import {useTelegram} from "../../../assets/hooks/useTelegram";
const items = [
    {
    type: 'Маргарита',
    desc:
        "Пицца «Маргарита» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +\n" +
        '          но позже попало на королевский стол</p>\n' +
        '    ',
    image:
        'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

    data: {
        name: 'маргарита',
        price: 400,
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
    },
},
    {
        type: 'пепперони',
        desc:
            'пицца «Пепперони» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
            'но позже попало на королевский стол.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        data: {
            name: 'пепперони',
            price: 600,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Примавера',
        desc: 'Пицца «Примавера» - Еще одна итальянская пицца, главными ингредиентами которой являются разноцветные овощи, придающие этой пицце весеннее настроение, ведь «Примавера» по-итальянски означает весна. В составе: моцарелла, болгарский перец, чили, цукини, пеперони, паприка, чеснок, томаты и орегано..',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Примавера',
            price: 900,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'ананасовая',
        desc:
            'Пицца «Ананасовая» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
            'но позже попало на королевский стол.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'ананасовая',
            price: 300,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: '4 мяса',
        desc:
            'Пицца «4 мяса» - это традиционное итальянское блюде, известное во всем мире. Ее состав максимально простой, но вкус никого не оставляет равнодушным. К тому же это блюдо имеет необычную историю происхождения. Сначала оно было популярно только среди простых горожан, ' +
            'но позже попало на королевский стол',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: '4 мяса',
            price: 600,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: '4 сыра',
        desc: 'Пицца «Четыре сыра» - Настоящий праздник для любителей сыров. Насыщенный вкус этой пицце придают 4 разных сорта сыра, входящие в начинку. Для приготовления пиццы «Четыре сыра» используют: моцареллу, пармезан, сыр фонтина  и пикантный дор-блю.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: '4 сыра',
            price: 600,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Сицилиская',
        desc: 'Пицца «Сицилийская» - Отличается квадратной формой и толстой основой. Название говорит само за себя о ее происхождении, в качестве начинки выступают анчоусы, а вот сыр кладут под соус.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Сицилиская',
            price: 600,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Маринара',
        desc: 'Пицца «Маринара» - Хотя в названии и явно присутствует морская тема, морепродуктов в этой пицце нет. «Маринара» это соус, который состоит из помидоров, лука, чеснока и пряных трав.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Маринара',
            price: 700,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Диабло',
        desc: 'Пицца «Diablo» - Вариант для тех, кто любит поострее. Родина этой пиццы — Калабрия. В составе острый калабрийский перец, сыры моцарелла и пармезан, салями и шампиньоны.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Диабло',
            price: 800,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Con Le Cozze',
        desc: 'Пицца «Con Le Cozze» - Пицца для любителей морепродуктов. Центральным ингредиентом являются мидии, петрушка, оливковое масло и чеснок. А вот традиционного для пиццы сыра здесь нет.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Con Le Cozze',
            price: 900,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Американа',
        desc: 'Пицца «Американа» - Эта пицца сильно отличается от традиционной итальянской. Обязательными ингредиентами является любой вид мяса. Здесь используют любую колбасу, мясной фарш, обжаренную свинину, бекон. А еще томатный соус, разные овощи и даже фрукты.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Американа',
            price: 700,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },
    {
        type: 'Капрезе',
        desc: 'Пицца «Капрезе» - Имеет свежий лёгкий вкус и яркий вид, а начинка повторяет классический салат капрезе: помидор, кусочки моцареллы и оливки. Все это выкладывается на традиционный томатный соус.',
        image:
            'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',

        data: {
            name: 'Капрезе',
            price: 800,
            image:
                'https://avatars.mds.yandex.net/i?id=49a8805157e65adc5a631454ea7c653ac67dfc74-8549420-images-thumbs&n=13',
        },
    },]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://77.105.172.140:8080/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className="list">
            {items.map(item => <Pizza product={item} onAdd={onAdd}/>)}
        </div>
    );
};

export default ProductList;
