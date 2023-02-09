// Copyright 2023 Tetrate
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HttpHealth extends pulumi.CustomResource {
    /**
     * Get an existing HttpHealth resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HttpHealthState, opts?: pulumi.CustomResourceOptions): HttpHealth {
        return new HttpHealth(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkmate:index/httpHealth:HttpHealth';

    /**
     * Returns true if the given object is an instance of HttpHealth.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HttpHealth {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HttpHealth.__pulumiType;
    }

    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1. If there are
     * fewer retries remaining than this number, the check will fail immediately
     */
    public readonly consecutiveSuccesses!: pulumi.Output<number>;
    /**
     * HTTP Request Headers
     */
    public readonly headers!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    public readonly interval!: pulumi.Output<number>;
    /**
     * HTTP Method, defaults to GET
     */
    public readonly method!: pulumi.Output<string>;
    /**
     * Max number of times to retry a failure. Default 5
     */
    public readonly retries!: pulumi.Output<number>;
    /**
     * Status Code to expect. Default 200
     */
    public readonly statusCode!: pulumi.Output<string>;
    /**
     * Overall timeout in milliseconds for the check before giving up. Default 5000
     */
    public readonly timeout!: pulumi.Output<number>;
    /**
     * URL
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a HttpHealth resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HttpHealthArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HttpHealthArgs | HttpHealthState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HttpHealthState | undefined;
            resourceInputs["consecutiveSuccesses"] = state ? state.consecutiveSuccesses : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["method"] = state ? state.method : undefined;
            resourceInputs["retries"] = state ? state.retries : undefined;
            resourceInputs["statusCode"] = state ? state.statusCode : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as HttpHealthArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["consecutiveSuccesses"] = args ? args.consecutiveSuccesses : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["method"] = args ? args.method : undefined;
            resourceInputs["retries"] = args ? args.retries : undefined;
            resourceInputs["statusCode"] = args ? args.statusCode : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HttpHealth.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HttpHealth resources.
 */
export interface HttpHealthState {
    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1. If there are
     * fewer retries remaining than this number, the check will fail immediately
     */
    consecutiveSuccesses?: pulumi.Input<number>;
    /**
     * HTTP Request Headers
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    interval?: pulumi.Input<number>;
    /**
     * HTTP Method, defaults to GET
     */
    method?: pulumi.Input<string>;
    /**
     * Max number of times to retry a failure. Default 5
     */
    retries?: pulumi.Input<number>;
    /**
     * Status Code to expect. Default 200
     */
    statusCode?: pulumi.Input<string>;
    /**
     * Overall timeout in milliseconds for the check before giving up. Default 5000
     */
    timeout?: pulumi.Input<number>;
    /**
     * URL
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HttpHealth resource.
 */
export interface HttpHealthArgs {
    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1. If there are
     * fewer retries remaining than this number, the check will fail immediately
     */
    consecutiveSuccesses?: pulumi.Input<number>;
    /**
     * HTTP Request Headers
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    interval?: pulumi.Input<number>;
    /**
     * HTTP Method, defaults to GET
     */
    method?: pulumi.Input<string>;
    /**
     * Max number of times to retry a failure. Default 5
     */
    retries?: pulumi.Input<number>;
    /**
     * Status Code to expect. Default 200
     */
    statusCode?: pulumi.Input<string>;
    /**
     * Overall timeout in milliseconds for the check before giving up. Default 5000
     */
    timeout?: pulumi.Input<number>;
    /**
     * URL
     */
    url: pulumi.Input<string>;
}
