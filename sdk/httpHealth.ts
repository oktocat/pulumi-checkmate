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
     * The CA bundle to use when connecting to the target host.
     */
    public readonly caBundle!: pulumi.Output<string | undefined>;
    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1.
     */
    public readonly consecutiveSuccesses!: pulumi.Output<number>;
    /**
     * If false, the resource will fail to create if the check does not pass. If true, the resource will be created anyway.
     * Defaults to false.
     */
    public readonly createAnywayOnCheckFailure!: pulumi.Output<boolean | undefined>;
    /**
     * HTTP Request Headers
     */
    public readonly headers!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Wether or not to completely skip the TLS CA verification. Default false.
     */
    public readonly insecureTls!: pulumi.Output<boolean | undefined>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    public readonly interval!: pulumi.Output<number>;
    /**
     * Arbitrary map of string values that when changed will cause the healthcheck to run again.
     */
    public readonly keepers!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * HTTP Method, defaults to GET
     */
    public readonly method!: pulumi.Output<string>;
    /**
     * True if the check passed
     */
    public /*out*/ readonly passed!: pulumi.Output<boolean>;
    /**
     * Optional request body to send on each attempt.
     */
    public readonly requestBody!: pulumi.Output<string | undefined>;
    /**
     * Timeout for an individual request. If exceeded, the attempt will be considered failure and potentially retried. Default
     * 1000
     */
    public readonly requestTimeout!: pulumi.Output<number>;
    /**
     * Result body
     */
    public /*out*/ readonly resultBody!: pulumi.Output<string>;
    /**
     * Status Code to expect. Can be a comma seperated list of ranges like '100-200,500'. Default 200
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
            resourceInputs["caBundle"] = state ? state.caBundle : undefined;
            resourceInputs["consecutiveSuccesses"] = state ? state.consecutiveSuccesses : undefined;
            resourceInputs["createAnywayOnCheckFailure"] = state ? state.createAnywayOnCheckFailure : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["insecureTls"] = state ? state.insecureTls : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["keepers"] = state ? state.keepers : undefined;
            resourceInputs["method"] = state ? state.method : undefined;
            resourceInputs["passed"] = state ? state.passed : undefined;
            resourceInputs["requestBody"] = state ? state.requestBody : undefined;
            resourceInputs["requestTimeout"] = state ? state.requestTimeout : undefined;
            resourceInputs["resultBody"] = state ? state.resultBody : undefined;
            resourceInputs["statusCode"] = state ? state.statusCode : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as HttpHealthArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["caBundle"] = args ? args.caBundle : undefined;
            resourceInputs["consecutiveSuccesses"] = args ? args.consecutiveSuccesses : undefined;
            resourceInputs["createAnywayOnCheckFailure"] = args ? args.createAnywayOnCheckFailure : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["insecureTls"] = args ? args.insecureTls : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["keepers"] = args ? args.keepers : undefined;
            resourceInputs["method"] = args ? args.method : undefined;
            resourceInputs["requestBody"] = args ? args.requestBody : undefined;
            resourceInputs["requestTimeout"] = args ? args.requestTimeout : undefined;
            resourceInputs["statusCode"] = args ? args.statusCode : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["passed"] = undefined /*out*/;
            resourceInputs["resultBody"] = undefined /*out*/;
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
     * The CA bundle to use when connecting to the target host.
     */
    caBundle?: pulumi.Input<string>;
    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1.
     */
    consecutiveSuccesses?: pulumi.Input<number>;
    /**
     * If false, the resource will fail to create if the check does not pass. If true, the resource will be created anyway.
     * Defaults to false.
     */
    createAnywayOnCheckFailure?: pulumi.Input<boolean>;
    /**
     * HTTP Request Headers
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Wether or not to completely skip the TLS CA verification. Default false.
     */
    insecureTls?: pulumi.Input<boolean>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    interval?: pulumi.Input<number>;
    /**
     * Arbitrary map of string values that when changed will cause the healthcheck to run again.
     */
    keepers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * HTTP Method, defaults to GET
     */
    method?: pulumi.Input<string>;
    /**
     * True if the check passed
     */
    passed?: pulumi.Input<boolean>;
    /**
     * Optional request body to send on each attempt.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Timeout for an individual request. If exceeded, the attempt will be considered failure and potentially retried. Default
     * 1000
     */
    requestTimeout?: pulumi.Input<number>;
    /**
     * Result body
     */
    resultBody?: pulumi.Input<string>;
    /**
     * Status Code to expect. Can be a comma seperated list of ranges like '100-200,500'. Default 200
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
     * The CA bundle to use when connecting to the target host.
     */
    caBundle?: pulumi.Input<string>;
    /**
     * Number of consecutive successes required before the check is considered successful overall. Defaults to 1.
     */
    consecutiveSuccesses?: pulumi.Input<number>;
    /**
     * If false, the resource will fail to create if the check does not pass. If true, the resource will be created anyway.
     * Defaults to false.
     */
    createAnywayOnCheckFailure?: pulumi.Input<boolean>;
    /**
     * HTTP Request Headers
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Wether or not to completely skip the TLS CA verification. Default false.
     */
    insecureTls?: pulumi.Input<boolean>;
    /**
     * Interval in milliseconds between attemps. Default 200
     */
    interval?: pulumi.Input<number>;
    /**
     * Arbitrary map of string values that when changed will cause the healthcheck to run again.
     */
    keepers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * HTTP Method, defaults to GET
     */
    method?: pulumi.Input<string>;
    /**
     * Optional request body to send on each attempt.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Timeout for an individual request. If exceeded, the attempt will be considered failure and potentially retried. Default
     * 1000
     */
    requestTimeout?: pulumi.Input<number>;
    /**
     * Status Code to expect. Can be a comma seperated list of ranges like '100-200,500'. Default 200
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
