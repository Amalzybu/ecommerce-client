<template>
    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link text-center" data-toggle="dropdown" aria-expanded="false" @click='toggleShow'><i class="icon-user" style="font-size: 18px;"></i></a>
        <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/login"><strong>Login</strong></router-link>
                <router-link class="dropdown-item" to="/register"><strong>Sign Up</strong></router-link>
        </div>   
    </li>
</template>