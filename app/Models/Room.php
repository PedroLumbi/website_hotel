<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'room_type_id', 'price', 'description', 'room_status_id'];

    public function roomType()
    {
        return $this->belongsTo(RoomType::class);
    }

    public function roomStatus()
    {
        return $this->belongsTo(RoomStatus::class);
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
