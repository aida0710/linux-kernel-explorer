---
sidebar_position: 7
---
# TODO

### ファイル情報

- パス: `linux-v6.12/drivers/staging/olpc_dcon/TODO`

### コンテンツ

```txt
TODO:
	- complete rewrite:
	  1. The underlying fbdev drivers need to be converted into drm kernel
	     modesetting drivers.
	  2. The dcon low-power display mode can then be integrated using the
	     drm damage tracking and self-refresh helpers.
	  This bolted-on self-refresh support that digs around in fbdev
	  internals, but isn't properly integrated, is not the correct solution.
	- see if vx855 gpio API can be made similar enough to cs5535 so we can
	  share more code

Please send patches to Greg Kroah-Hartman <greg@kroah.com> and
copy:
	Daniel Drake <dsd@laptop.org>
	Jens Frederich <jfrederich@gmail.com>

```
