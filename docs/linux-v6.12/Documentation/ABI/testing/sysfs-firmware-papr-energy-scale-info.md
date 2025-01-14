---
sidebar_position: 446
---
# sysfs-firmware-papr-energy-scale-info

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-firmware-papr-energy-scale-info`

### コンテンツ

```txt
What:		/sys/firmware/papr/energy_scale_info
Date:		February 2022
Contact:	Linux for PowerPC mailing list <linuxppc-dev@lists.ozlabs.org>
Description:	Directory hosting a set of platform attributes like
		energy/frequency on Linux running as a PAPR guest.

		Each file in a directory contains a platform
		attribute hierarchy pertaining to performance/
		energy-savings mode and processor frequency.

What:		/sys/firmware/papr/energy_scale_info/<id>
Date:		February 2022
Contact:	Linux for PowerPC mailing list <linuxppc-dev@lists.ozlabs.org>
Description:	Energy, frequency attributes directory for POWERVM servers

What:		/sys/firmware/papr/energy_scale_info/<id>/desc
Date:		February 2022
Contact:	Linux for PowerPC mailing list <linuxppc-dev@lists.ozlabs.org>
Description:	String description of the energy attribute of <id>

What:		/sys/firmware/papr/energy_scale_info/<id>/value
Date:		February 2022
Contact:	Linux for PowerPC mailing list <linuxppc-dev@lists.ozlabs.org>
Description:	Numeric value of the energy attribute of <id>

What:		/sys/firmware/papr/energy_scale_info/<id>/value_desc
Date:		February 2022
Contact:	Linux for PowerPC mailing list <linuxppc-dev@lists.ozlabs.org>
Description:	String value of the energy attribute of <id>

```
