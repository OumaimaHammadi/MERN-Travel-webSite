import Booking from '../models/Booking.js'



// Create Booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()
        res.status(200).json(
            {success:true,
            message:'Successfully created',
            data:savedBooking
    })


    }
    catch(err){
        res.status(500).json({
            success:false,
            message:'internal server error'})


    }
}


// get Single Booking

export const getBooking = async(req,res)=>{
    const id = req.params.id
    


    
    
    try{
        const Bookings = await Booking.findById(id)

        res.
        status(200)
        .json(
            {
            success:true,
            count:Bookings.length,
            message:'Successfully geted All Bookings',
            data:Bookings

            })

    }catch(err){

        res.
        status(404).
        json({
            success:false,
            message:'not found'
        })

    }
}




// get AllBookings

export const getAllBookings = async(req,res)=>{
    
    try{
        const Books = await Booking.find({})

        res.
        status(200)
        .json(
            {
            success:true,
            count:Books.length,
            message:'Successfully geted All Books',
            data:Books

            })

    }catch(err){

        res.
        status(500).
        json({
            success:false,
            message:'internal error server'
        })

    }
}
