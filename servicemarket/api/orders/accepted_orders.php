<?php
include '../general.php';

requireLogin();

$conn = new mysqli(db_host(), db_user(), db_pass(), db_name());

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$api_result = new stdClass();
$api_result->type = "accepted_orders";
$api_result->orders = array();

$stmt = $conn->prepare("select uo.ID as UserOrderID, u.Username as Username, uo.State as State, od.* from UserOrder uo
join Offer o on uo.AcceptedOfferID = o.ID
and o.UserID = ?
and uo.Closed = 0
join User u on uo.UserID = u.ID
join OrderData od on uo.OrderDataID = od.ID");
$stmt->bind_param("i", getUserID());
$stmt->execute();

$result = $stmt->get_result();
while($row = $result->fetch_assoc()) {
  $order = new stdClass();
  $order->id = $row["UserOrderID"];
  $order->username = $row["Username"];
  $order->state = $row["State"];
  $order->pokemon_name = $row["PokemonName"];
  $order->level = $row["Level"];
  $order->nature = $row["Nature"];
  $order->ability = $row["Ability"];
  $order->item = $row["Item"];
  $order->iv_hp = $row["IVHP"];
  $order->iv_atk = $row["IVATK"];
  $order->iv_def = $row["IVDEF"];
  $order->iv_spatk = $row["IVSPATK"];
  $order->iv_spdef = $row["IVSPDEF"];
  $order->iv_spe = $row["IVSPE"];
  $order->ev_hp = $row["EVHP"];
  $order->ev_atk = $row["EVATK"];
  $order->ev_def = $row["EVDEF"];
  $order->ev_spatk = $row["EVSPATK"];
  $order->ev_spdef = $row["EVSPDEF"];
  $order->ev_spe = $row["EVSPE"];
  $order->is_my_order = false;
  $api_result->orders[] = $order;
}

echo json_encode($api_result);

$stmt->close();

$conn->close();
