<div class="container my-3">
    <div class="row">
        <div class="col">

            <h3>Personal information</h3>


            <table>
                <tr>
                    <th>Username:</th>
                    <td>
                        <?= $user->username ?>
                    </td>
                </tr>
                <tr>
                    <th>First name:</th>
                    <td>
                        <?= $user->first_name ?>
                    </td>
                </tr>
                <tr>
                    <th>Last name:</th>
                    <td>
                        <?= $user->last_name ?>
                    </td>
                </tr>

                <tr>
                    <th>E-mail:</th>
                    <td>
                        <?= $user->email ?>
                    </td>
                </tr>

            </table>
            <p>You are
                <?= $user->mailing_list ? "" : "not" ?> subscribed to the newsletter
            </p>
        </div>
        <div class="col">
            <h3>Billing address</h3>
            <?php if ($address->street) : ?>
                <table>
                    <tr>
                        <th>Street</th>
                        <td>
                            <?= $address->street ?>
                        </td>
                    </tr>
                    <tr>
                        <th>Housenumber</th>
                        <td>
                            <?= $address->house_number ?>
                            <?= $address->addition ? "- $address->addition" : "" ?>
                        </td>
                    </tr>
                    <tr>
                        <th>Postal code</th>
                        <td>
                            <?= $address->postal_code ?>
                        </td>
                    </tr>

                    <tr>
                        <th>City</th>
                        <td>
                            <?= $address->city ?>
                        </td>
                    </tr>

                </table>
            <?php else : ?>

                <div class="accordion accordion-flush bg-transparent" id="accordionFlushExample">
                    <div class="accordion-item bg-transparent">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <i class="bi bi-plus-lg"></i>Add address
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <form action="/?page=user&action=addAddress" method="POST" class="needs-validation my-3" novalidate>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="street" placeholder="Street name" name="street" value="" required>
                                    <label for="street">Street name</label>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="housenumber" name="house_number" placeholder="House number" value="" required>
                                            <label for="housenumber">House number</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="addition" placeholder="Addition" name="addition" value="">
                                            <label for="addition">Addition</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="postal" placeholder="Postal code" name="postal_code" value="" required>
                                    <label for="postal">Postal code</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="city" placeholder="City" name="city" value="" required>
                                    <label for="city">City</label>
                                </div>
                                <button class="btn btn-outline-secondary my-3" type="submit" @click="validateForm">Add address</button>
                            </form>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>