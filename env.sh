#!/bin/sh

# if [${SH_ENV} = local]
#   then
#   export DOTENV_CONFIG_PATH=config/.env.${SH_ENV}

# elif [${${SH_ENV}} = dev]
#  then
#   export DOTENV_CONFIG_PATH=config/.env.dev

# elif [${${SH_ENV}} = prod]
#   then
#   export DOTENV_CONFIG_PATH=config/.env.prod

# else
#   export DOTENV_CONFIG_PATH=config/.env.local

# fi

export DOTENV_CONFIG_PATH=config/.env.local
echo ${DOTENV_CONFIG_PATH}
npm run dev