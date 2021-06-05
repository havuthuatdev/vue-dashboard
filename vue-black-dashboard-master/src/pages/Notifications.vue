<template>
  <div class="row">
    <!-- <div class="col-md-6">
      <card>
        <h4 slot="header">Notifications Style</h4>
        <base-alert type="info">
          <span>This is a plain notification</span>
        </base-alert>
        <base-alert type="info" dismissible>
          <span>This is a plain notification</span>
        </base-alert>
        <base-alert type="info" dismissible with-icon>
          <span data-notify="icon" class="tim-icons icon-bell-55"></span>
          <span data-notify="message">This is a notification with close button and icon.</span>
        </base-alert>
        <base-alert type="info" dismissible with-icon>
          <span data-notify="icon" class="tim-icons icon-bell-55"></span>
          <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
        </base-alert>
      </card>
    </div>
    <div class="col-md-6">
      <card>
        <h4 slot="header">Notifications states</h4>
        <base-alert type="primary" dismissible>
          <span><b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
        </base-alert>
        <base-alert type="info" dismissible>
          <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
        </base-alert>
        <base-alert type="success" dismissible>
          <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
        </base-alert>
        <base-alert type="warning" dismissible>
          <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
        </base-alert>
        <base-alert type="danger" dismissible>
          <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
        </base-alert>
      </card>
    </div>-->
    <div class="col-md-6">
      <card>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Code</label>
            <input
              type="text"
              class="form-control"
              placeholder="abcd123"
              v-model="voucherForm.code"
            />
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <input
              type="text"
              class="form-control"
              placeholder="abcd123"
              v-model="voucherForm.description"
            />
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Count</label>
            <input
              type="number"
              class="form-control"
              placeholder="abcd123"
              v-model="voucherForm.count"
            />
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Denomination</label>
            <input
              type="number"
              class="form-control"
              placeholder="abcd123"
              v-model="voucherForm.denomination"
            />
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="example-datetime-local-input">Date and time</label>
            <div class="col-10">
              <input
                class="form-control"
                type="datetime-local"
                value="2011-08-19T13:45:00"
                id="example-datetime-local-input"
                v-model="voucherForm.datetime1"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="example-datetime-local-input">Date and time</label>
            <div class="col-10">
              <input
                class="form-control"
                type="datetime-local"
                value="2011-08-1913:45:00"
                id="example-datetime-local-input"
                v-model="voucherForm.datetime2"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
        </form>
      </card>
    </div>
  </div>
</template>
<script>
import NotificationTemplate from "./Notifications/NotificationTemplate";
import { BaseAlert } from "@/components";

export default {
  components: {
    BaseAlert,
  },
  data() {
    return {
      // type: ["", "info", "success", "warning", "danger"],
      // notifications: {
      //   topCenter: false
      // }
      voucherForm: {
        code: "",
        description: "",
        count: "",
        denomination: "",
        datetime1: "",
        datetime2: "",
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.voucherForm.datetime2);
      debugger;
      this.$store
        .dispatch("createVoucher", {
          code: this.voucherForm.code,
          description: this.voucherForm.description,
          count: this.voucherForm.count,
          denomination: this.voucherForm.denomination,
          datetime1: this.voucherForm.datetime1,
          datetime2: this.voucherForm.datetime2,
        })
        .then(() => {
          debugger;
          this.$route.push("dashboard");
        });
    },
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "tim-icons icon-bell-55",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
        timeout: 0,
      });
    },
  },
};
</script>
<style>
</style>
