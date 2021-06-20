<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseFeatureModel;
use App\Models\CoursePlanModel;
use App\Models\FreeClassModel;
use App\Models\MoreSeriesModel;
use App\Models\PaymentGuideModel;


class HomeController extends Controller
{
  function getCourseFetures(){
      $result=CourseFeatureModel::all();
      return $result;

  }
    function getCoursePlan(){
        $result=CoursePlanModel::all();
        return $result;

    }
    function getFreeclass(){
        $result=FreeClassModel::all();
        return $result;

    }
    function MoreSerires(){
        $result=MoreSeriesModel::all();
        return $result;

    }
    function getPaymentGuide(){
        $result=PaymentGuideModel::all();
        return $result;

    }
}
