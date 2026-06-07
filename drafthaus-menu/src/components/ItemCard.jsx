
export default function ItemCard({ item }) {
  return (
    <div className="card">
      <p>{item.name}</p>
      <p>Ksh {item.price}</p>
    </div>
  );
}