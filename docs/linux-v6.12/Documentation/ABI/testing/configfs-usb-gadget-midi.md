---
sidebar_position: 17
---
# configfs-usb-gadget-midi

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/configfs-usb-gadget-midi`

### コンテンツ

```txt
What:		/config/usb-gadget/gadget/functions/midi.name
Date:		Nov 2014
KernelVersion:	3.19
Description:
		The attributes:

		==========	====================================
		index		index value for the USB MIDI adapter
		id		ID string for the USB MIDI adapter
		buflen		MIDI buffer length
		qlen		USB read request queue length
		in_ports	number of MIDI input ports
		out_ports	number of MIDI output ports
		==========	====================================

```
