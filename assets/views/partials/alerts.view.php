<?php if (!empty($_SESSION['alert'])) : ?>

    <div class="alert <?= $_SESSION['alert']['class'] ?> alert-dismissible fade show" role="alert">
        <?= $_SESSION['alert']['text'] ?>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

<?php
    unset($_SESSION['alert']);
endif; ?>