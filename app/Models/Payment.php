<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['reservation_id', 'payment_type_id', 'amount', 'payment_date'];

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }
}
