---
sidebar_position: 194
---
# sysfs-bus-intel_th-output-devices

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-intel_th-output-devices`

### コンテンツ

```txt
What:		/sys/bus/intel_th/devices/<intel_th_id>-<device><id>/active
Date:		June 2015
KernelVersion:	4.3
Contact:	Alexander Shishkin <alexander.shishkin@linux.intel.com>
Description:	(RW) Writes of 1 or 0 enable or disable trace output to this
		output device. Reads return current status. Requires that the
		correstponding output port driver be loaded.

What:		/sys/bus/intel_th/devices/<intel_th_id>-msc<msc-id>/port
Date:		June 2015
KernelVersion:	4.3
Contact:	Alexander Shishkin <alexander.shishkin@linux.intel.com>
Description:	(RO) Port number, corresponding to this output device on the
		switch (GTH) or "unassigned" if the corresponding output
		port driver is not loaded.

```
