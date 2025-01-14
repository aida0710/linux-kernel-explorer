---
sidebar_position: 10
---
# configfs-usb-gadget-acm

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/configfs-usb-gadget-acm`

### コンテンツ

```txt
What:		/config/usb-gadget/gadget/functions/acm.name
Date:		Jun 2013
KernelVersion:	3.11
Description:

		This item contains just one readonly attribute: port_num.
		It contains the port number of the /dev/ttyGS<n> device
		associated with acm function's instance "name".

What:		/config/usb-gadget/gadget/functions/acm.name/protocol
Date:		Aug 2024
KernelVersion:	6.13
Description:
		Reported bInterfaceProtocol for the ACM device. For legacy
		reasons, this defaults to 1 (USB_CDC_ACM_PROTO_AT_V25TER).

```
