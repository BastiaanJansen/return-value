/**
 * Type definitions for return-value package.
 *
 * @see <a href="https://www.npmjs.com/package/return-value">NPM Package</a>
 *
 * @author Bastiaan Jansen
 * @author Owen Elderbroek
 */

/**
 *
 */
export declare type ValueFunction = <T>(value: T) => T;

/**
 *
 */
export const returnValue: ValueFunction;
