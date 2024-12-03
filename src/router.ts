import {Router } from 'express'
import { body,param } from 'express-validator'
import { createProduct, getProductById, getProducts, updateAvailability, updateProduct } from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()


//Routing 
router.get('/', getProducts)
router.get('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById)

router.post('/', 
    
    //Validación
    body('name')
            .notEmpty().withMessage('El nombre del Producto no puede ir vacío'),
    body('price')
            .isNumeric().withMessage('Valor no válido')
            .notEmpty().withMessage('El precio del Producto no puede ir vacío')
            .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

router.put('/:id', 
    //Validación
    body('name')
            .notEmpty().withMessage('El nombre del Producto no puede ir vacío'),
    body('price')
            .isNumeric().withMessage('Valor no válido')
            .notEmpty().withMessage('El precio del Producto no puede ir vacío')
            .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateProduct)

router.patch('/:id', updateAvailability)

router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router