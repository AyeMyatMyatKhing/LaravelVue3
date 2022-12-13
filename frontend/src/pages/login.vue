<template>
    <div class="container">
        <div class="card login-form">
            <div class="card-header">
                <div class="card-title">
                    <h3>Login</h3>
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="email">User Email</label>
                    <input type="text" class="form-control" name="email">
                </div>
                <div class="form-group">
                    <label for="password">User Password</label>
                    <input type="password" class="form-control" name="password">
                </div>
                <button class="btn btn-primary" @click.prevent="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    function login() {

    }
</script>

<style src="../assets/css/style.css"></style>