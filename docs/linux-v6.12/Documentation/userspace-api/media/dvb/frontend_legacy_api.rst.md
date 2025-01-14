---
sidebar_position: 74
---
# frontend_legacy_api.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/userspace-api/media/dvb/frontend_legacy_api.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GFDL-1.1-no-invariants-or-later

.. _frontend_legacy_types:

Frontend Legacy Data Types
==========================


.. toctree::
    :maxdepth: 1

    fe-type-t
    fe-bandwidth-t
    dvb-frontend-parameters
    dvb-frontend-event


.. _frontend_legacy_fcalls:

Frontend Legacy Function Calls
==============================

Those functions are defined at DVB version 3. The support is kept in the
kernel due to compatibility issues only. Their usage is strongly not
recommended


.. toctree::
    :maxdepth: 1

    fe-read-ber
    fe-read-snr
    fe-read-signal-strength
    fe-read-uncorrected-blocks
    fe-set-frontend
    fe-get-frontend
    fe-get-event
    fe-dishnetwork-send-legacy-cmd

```
