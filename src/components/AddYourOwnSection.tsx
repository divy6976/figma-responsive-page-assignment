import { Plus } from 'lucide-react';

const AddYourOwnSection = () => {
  return (
    <section className="add-your-own-section">
      <div className="container py-5">
        <div className="add-your-own-card">
          <div className="d-flex align-items-start mb-4">
            <div className="plus-icon-circle">
              <Plus size={32} strokeWidth={2.5} />
            </div>
            <h3 className="add-your-own-title ms-3 mb-0">Add your own</h3>
          </div>
          
          <p className="add-your-own-description mb-4">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
          
          <button className="btn btn-outline-add-new btn-block-sm">
            Add new
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddYourOwnSection;
