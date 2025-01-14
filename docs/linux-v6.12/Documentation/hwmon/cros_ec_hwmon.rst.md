---
sidebar_position: 40
---
# cros_ec_hwmon.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/hwmon/cros_ec_hwmon.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GPL-2.0-or-later

Kernel driver cros_ec_hwmon
===========================

Supported chips:

  * ChromeOS embedded controllers.

    Prefix: 'cros_ec'

    Addresses scanned: -

Author:

  - Thomas Weißschuh <linux@weissschuh.net>

Description
-----------

This driver implements support for hardware monitoring commands exposed by the
ChromeOS embedded controller used in Chromebooks and other devices.

The channel labels exposed via hwmon are retrieved from the EC itself.

Fan and temperature readings are supported.

```
