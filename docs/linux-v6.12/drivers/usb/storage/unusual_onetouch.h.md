---
sidebar_position: 41
---
# unusual_onetouch.h

### ファイル情報

- パス: `linux-v6.12/drivers/usb/storage/unusual_onetouch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Unusual Devices File for the Maxtor OneTouch USB hard drive's button
 */

#if defined(CONFIG_USB_STORAGE_ONETOUCH) || \
		defined(CONFIG_USB_STORAGE_ONETOUCH_MODULE)

/*
 * Submitted by: Nick Sillik <n.sillik@temple.edu>
 * Needed for OneTouch extension to usb-storage
 */
UNUSUAL_DEV(  0x0d49, 0x7000, 0x0000, 0x9999,
		"Maxtor",
		"OneTouch External Harddrive",
		USB_SC_DEVICE, USB_PR_DEVICE, onetouch_connect_input,
		0),

UNUSUAL_DEV(  0x0d49, 0x7010, 0x0000, 0x9999,
		"Maxtor",
		"OneTouch External Harddrive",
		USB_SC_DEVICE, USB_PR_DEVICE, onetouch_connect_input,
		0),

#endif /* defined(CONFIG_USB_STORAGE_ONETOUCH) || ... */

```
