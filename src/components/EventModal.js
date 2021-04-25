import React from 'react'

const EventModal = (props) => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className={`modal-title text-${props.details[3]} fw-bold`} id="exampleModalLabel">{props.details[0]}</h5>                        
                        </div>
                        <div className={`modal-body bg-${props.details[3]}`}>
                            <h4>{props.details[1]}</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventModal
