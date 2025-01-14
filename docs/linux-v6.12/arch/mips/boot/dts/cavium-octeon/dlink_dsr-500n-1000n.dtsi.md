---
sidebar_position: 1
---
# dlink_dsr-500n-1000n.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/cavium-octeon/dlink_dsr-500n-1000n.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Device tree source for D-Link DSR-500N/1000N (common parts).
 *
 * Written by: Aaro Koskinen <aaro.koskinen@iki.fi>
 */

/include/ "octeon_3xxx.dtsi"

/ {
	soc@0 {
		smi0: mdio@1180000001800 {
			phy8: ethernet-phy@8 {
				reg = <8>;
				compatible = "ethernet-phy-ieee802.3-c22";
			};
		};

		pip: pip@11800a0000000 {
			interface@0 {
				ethernet@0 {
					fixed-link {
						speed = <1000>;
						full-duplex;
					};
				};
				ethernet@1 {
					fixed-link {
						speed = <1000>;
						full-duplex;
					};
				};
				ethernet@2 {
					phy-handle = <&phy8>;
				};
			};
		};

		twsi0: i2c@1180000001000 {
			rtc@68 {
				compatible = "dallas,ds1337";
				reg = <0x68>;
			};
		};

		usbn: usbn@1180068000000 {
			refclk-frequency = <12000000>;
			refclk-type = "crystal";
		};
	};

	aliases {
		pip = &pip;
	};
};

```
