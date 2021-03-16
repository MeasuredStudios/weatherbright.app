// function ModalWrapper() {
//   const [showModal, setShowModal] = useState(false);
//   const handleShowModal = useCallback(() => {
//     setShowModal(!showModal);
//   }, [showModal]);
//   const handleCloseModal = useCallback(() => {
//     setShowModal(false);
//   }, []);
//   return (
//     <div className="p-4">
//       <h1 className="text-red-500 text-center">PlayGround</h1>
//       <div className="p-2">
//         <button onClick={handleShowModal}>Show Modal</button>
//         {showModal && <Modal onCancel={handleCloseModal} />}
//       </div>
//     </div>
//   );
// }
